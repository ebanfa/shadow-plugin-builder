<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ReceiptType extends Model {

    public $primaryKey = 'id';
    public $table = 'receipttype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function business_category()
    {
        return $this->belongsTo('BusinessCategory');
    }

    /**
     * 
     */
    public function type()
    {
        return $this->hasMany('Receipt');
    }

}

?>