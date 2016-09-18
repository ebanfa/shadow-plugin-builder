<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class FinancialEventType extends Model {

    public $primaryKey = 'id';
    public $table = 'financialeventtype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }

    /**
     * 
     */
    public function fevent_type()
    {
        return $this->hasMany('FEventTxnType');
    }
    /**
     * 
     */
    public function event_type()
    {
        return $this->hasMany('FinancialEvent');
    }

}

?>