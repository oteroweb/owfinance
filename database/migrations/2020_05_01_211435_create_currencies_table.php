<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCurrenciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('currencies', function (Blueprint $table) {
            $table->id();
            $table->string('name', 35);
            $table->double('tax',8,2)->default(0);
            $table->double('last_tax',8,2)->default(0);
            $table->string('symbol', 35);
            $table->string('symbol_native',35);
            $table->string('decimal_digits',35)->default(2);
            $table->string('rounding',35)->default(0);
            $table->string('name_plural',50);
            $table->string('code',35);
            $table->boolean('active')->default(1);
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
        Schema::dropIfExists('currencies');
    }
}
