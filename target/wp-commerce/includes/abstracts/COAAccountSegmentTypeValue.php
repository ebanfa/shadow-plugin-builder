<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class COAAccountSegmentTypeValue extends Model {

    public $primaryKey = 'id';
    public $table = 'coaaccountsegmenttypevalue';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function v_segtype()
    {
        return $this->belongsTo('COAAccountSegmentType');
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