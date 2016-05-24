<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AgreementCategory extends Model {

    public $primaryKey = 'id';
    public $table = 'agreementcategory';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function category()
    {
        return $this->hasMany('AgreementType');
    }

}

?>