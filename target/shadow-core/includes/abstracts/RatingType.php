<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class RatingType extends Model {

    public $primaryKey = 'id';
    public $table = 'ratingtype';
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
    public function rating_type()
    {
        return $this->hasMany('PerformanceReviewItem');
    }

}

?>