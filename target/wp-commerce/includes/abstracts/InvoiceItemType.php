<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class InvoiceItemType extends Model {

    public $primaryKey = 'id';
    public $table = 'invoiceitemtype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function item_type()
    {
        return $this->hasMany('InvoiceItem');
    }

}

?>