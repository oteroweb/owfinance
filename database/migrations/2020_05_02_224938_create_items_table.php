<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string("name",60);
            $table->double('cost_unit',8,2);
            $table->double('total',8,2);
            $table->string('notes' );
            $table->integer('order');
            $table->boolean('active')->default(1);
            $table->integer('quantity');
            $table->unsignedBigInteger('category_item_id');
            $table->foreign('category_item_id')->references('id')->on('category_items')->nullable();
            $table->unsignedBigInteger('invoice_id');
            $table->foreign('invoice_id')->references('id')->on('invoices')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
}
