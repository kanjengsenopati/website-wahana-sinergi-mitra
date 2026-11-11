<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category')->default('Komersial');
            $table->string('client_name')->nullable();
            $table->string('location')->default('Indonesia');
            $table->unsignedBigInteger('project_value')->nullable();
            $table->integer('year')->default(2025);
            $table->string('thumbnail_url')->nullable();
            $table->json('gallery_images')->nullable();
            $table->string('status')->default('Selesai');
            $table->text('description')->nullable();
            $table->boolean('is_featured')->default(true);
            $table->integer('order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
