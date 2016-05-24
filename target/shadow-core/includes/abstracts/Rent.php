<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Rent extends Model {

    public $primaryKey = 'id';
    public $table = 'rent';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function agreement()
    {
        return $this->belongsTo('Agreement');
    }
    /**
     * 
     */
    public function tenant()
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