<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class COAAccountSegmentType extends Model {

    public $primaryKey = 'id';
    public $table = 'coaaccountsegmenttype';
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
    public function v_segtype()
    {
        return $this->hasMany('COAAccountSegmentTypeValue');
    }
    /**
     * 
     */
    public function seg_type()
    {
        return $this->hasMany('COAAccountSegment');
    }

}

?>