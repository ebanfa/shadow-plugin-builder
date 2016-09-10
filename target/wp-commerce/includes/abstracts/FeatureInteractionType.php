<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class FeatureInteractionType extends Model {

    public $primaryKey = 'id';
    public $table = 'featureinteractiontype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function interaction_type()
    {
        return $this->hasMany('ProductFeatureInteraction');
    }

}

?>