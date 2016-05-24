<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class InvoiceType extends Model {

    public $primaryKey = 'id';
    public $table = 'invoicetype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function it_template()
    {
        return $this->belongsTo('Template');
    }
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
        return $this->hasMany('Invoice');
    }

}

?>