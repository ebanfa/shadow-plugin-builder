<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AgreementItemType extends Model {

    public $primaryKey = 'id';
    public $table = 'agreementitemtype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function ai_type()
    {
        return $this->hasMany('AgreementItem');
    }

}

?>