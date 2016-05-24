<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class TermType extends Model {

    public $primaryKey = 'id';
    public $table = 'termtype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function business_category()
    {
        return $this->belongsTo('BusinessCategory');
    }

    /**
     * 
     */
    public function t_type()
    {
        return $this->hasMany('Term');
    }

}

?>