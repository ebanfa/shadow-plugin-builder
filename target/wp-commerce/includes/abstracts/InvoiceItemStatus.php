<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class InvoiceItemStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'invoiceitemstatus';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function ii_status()
    {
        return $this->hasMany('InvoiceItem');
    }

}

?>