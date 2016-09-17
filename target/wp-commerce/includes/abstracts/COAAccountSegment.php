<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class COAAccountSegment extends Model {

    public $primaryKey = 'id';
    public $table = 'coaaccountsegment';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function seg_type()
    {
        return $this->belongsTo('COAAccountSegmentType');
    }
    /**
     * 
     */
    public function seg_acctstruct()
    {
        return $this->belongsTo('COAAccountStructure');
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
    public function acct_segment()
    {
        return $this->hasMany('COAAccountSegmentInstance');
    }

}

?>