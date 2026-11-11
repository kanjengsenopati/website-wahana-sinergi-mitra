<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test the login page renders successfully.
     */
    public function test_login_screen_can_be_rendered(): void
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
    }

    /**
     * Test admin login redirects to the custom login screen.
     */
    public function test_admin_login_route_redirects_to_login(): void
    {
        $response = $this->get('/admin/login');

        $response->assertRedirect('/login');
    }

    /**
     * Test user can authenticate and be redirected to /admin.
     */
    public function test_users_can_authenticate_using_the_login_screen(): void
    {
        $user = User::factory()->create([
            'email' => 'admin@wahanasinergimitra.id',
            'password' => Hash::make('password123'),
        ]);

        $response = $this->post('/login', [
            'email' => 'admin@wahanasinergimitra.id',
            'password' => 'password123',
        ]);

        $this->assertAuthenticatedAs($user);
        $response->assertRedirect('/admin');
    }

    /**
     * Test authentication fails with wrong credentials.
     */
    public function test_users_cannot_authenticate_with_invalid_password(): void
    {
        $user = User::factory()->create([
            'email' => 'admin@wahanasinergimitra.id',
            'password' => Hash::make('password123'),
        ]);

        $response = $this->post('/login', [
            'email' => 'admin@wahanasinergimitra.id',
            'password' => 'wrong-password',
        ]);

        $this->assertGuest();
        $response->assertSessionHasErrors('email');
    }
}
