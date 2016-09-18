<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class InvoiceStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'invoicestatus';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function status()
    {
        return $this->hasMany('Invoice');
    }

}

?>