<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_invoice_id');
            $table->foreign('category_invoice_id')->references('id')->on('category_invoices')->nullable();

            $table->string('name', 35);

            
            $table->dateTime('date');
            $table->boolean('active')->default(1);

            $table->unsignedBigInteger('category_invoice_id');
            $table->foreign('category_invoice_id')->references('id')->on('category_invoices')->nullable();
            $table->boolean('simple_transaction')->default(1);

            
            $table->double('total',8,2);
            $table->boolean('simple_invoice')->default(1);


            $table->boolean('active')->default(1);

            $table->unsignedBigInteger('provider_id');
            $table->foreign('provider_id')->references('id')->on('providers')->nullable();


            // $table->double('cost_unit',8,2);
            
            $table->string('notes' );
            
            $table->timestamps();
            $table->softDeletes();

            $table->double('comission',8,2);
            $table->double('dolar_tax',8,2);
            // $table->double('dolar_tax_acquired',8,2);
            $table->double('dolar_amount',8,2);
            $table->double('currency_id',8,2);
            $table->foreign('currency_id')->references('id')->on('currencies')->nullable();


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
        Schema::dropIfExists('invoices');
    }
}
