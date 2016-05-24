<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PerformanceNote extends Model {

    public $primaryKey = 'id';
    public $table = 'performancenote';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function given_by()
    {
        return $this->belongsTo('PartyRole');
    }
    /**
     * 
     */
    public function regarding()
    {
        return $this->belongsTo('PartyRole');
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