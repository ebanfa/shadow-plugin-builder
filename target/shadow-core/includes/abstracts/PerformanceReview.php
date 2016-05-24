<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PerformanceReview extends Model {

    public $primaryKey = 'id';
    public $table = 'performancereview';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function from_role()
    {
        return $this->belongsTo('PartyRole');
    }
    /**
     * 
     */
    public function for_role()
    {
        return $this->belongsTo('PartyRole');
    }
    /**
     * 
     */
    public function position()
    {
        return $this->belongsTo('Position');
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
    public function pay_history()
    {
        return $this->belongsTo('PayHistory');
    }
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
    public function perf_review()
    {
        return $this->hasMany('PerformanceReviewItem');
    }

}

?>