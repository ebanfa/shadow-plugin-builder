<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PerformanceReviewItem extends Model {

    public $primaryKey = 'id';
    public $table = 'performancereviewitem';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function perf_review()
    {
        return $this->belongsTo('PerformanceReview');
    }
    /**
     * 
     */
    public function item_type()
    {
        return $this->belongsTo('PerfReviewItemType');
    }
    /**
     * 
     */
    public function rating_type()
    {
        return $this->belongsTo('RatingType');
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