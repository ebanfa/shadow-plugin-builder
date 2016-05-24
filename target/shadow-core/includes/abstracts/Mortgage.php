<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Mortgage extends Model {

    public $primaryKey = 'id';
    public $table = 'mortgage';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function m_type()
    {
        return $this->belongsTo('MortgageType');
    }
    /**
     * 
     */
    public function m_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function lender()
    {
        return $this->belongsTo('Party');
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