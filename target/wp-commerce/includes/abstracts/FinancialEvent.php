<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class FinancialEvent extends Model {

    public $primaryKey = 'id';
    public $table = 'financialevent';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function event_type()
    {
        return $this->belongsTo('FinancialEventType');
    }
    /**
     * 
     */
    public function internal_org()
    {
        return $this->belongsTo('BusinessUnit');
    }
    /**
     * 
     */
    public function from_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function to_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function payment()
    {
        return $this->belongsTo('Payment');
    }
    /**
     * 
     */
    public function invoice()
    {
        return $this->belongsTo('Invoice');
    }
    /**
     * 
     */
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }


}

?>