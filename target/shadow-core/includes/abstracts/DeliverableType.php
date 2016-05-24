<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class DeliverableType extends Model {

    public $primaryKey = 'id';
    public $table = 'deliverabletype';
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
    public function d_type()
    {
        return $this->hasMany('Deliverable');
    }

}

?>