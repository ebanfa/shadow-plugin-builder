<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class SettlementDataLoan extends Model {

    public $primaryKey = 'id';
    public $table = 'settlementdataloan';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function li_settledata()
    {
        return $this->belongsTo('SettlementData');
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