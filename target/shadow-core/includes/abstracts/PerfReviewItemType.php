<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PerfReviewItemType extends Model {

    public $primaryKey = 'id';
    public $table = 'perfreviewitemtype';
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
    public function item_type()
    {
        return $this->hasMany('PerformanceReviewItem');
    }

}

?>