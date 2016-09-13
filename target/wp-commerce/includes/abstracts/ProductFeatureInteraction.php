<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductFeatureInteraction extends Model {

    public $primaryKey = 'id';
    public $table = 'productfeatureinteraction';
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
        return $this->belongsTo('FeatureInteractionType');
    }
    /**
     * 
     */
    public function interaction_prod()
    {
        return $this->belongsTo('Product');
    }
    /**
     * 
     */
    public function interaction_feat()
    {
        return $this->belongsTo('ProductFeature');
    }


}

?>