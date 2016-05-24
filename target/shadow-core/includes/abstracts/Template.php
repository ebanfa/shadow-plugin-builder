<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Template extends Model {

    public $primaryKey = 'id';
    public $table = 'template';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function t_type()
    {
        return $this->belongsTo('TemplateType');
    }

    /**
     * 
     */
    public function it_template()
    {
        return $this->hasMany('InvoiceType');
    }

}

?>