<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Term extends Model {

    public $primaryKey = 'id';
    public $table = 'term';
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
        return $this->belongsTo('TermType');
    }
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
    public function po_term()
    {
        return $this->hasMany('PurchaseOrderTerm');
    }
    /**
     * 
     */
    public function it_term()
    {
        return $this->hasMany('InvoiceTerm');
    }
    /**
     * 
     */
    public function at_term()
    {
        return $this->hasMany('AgreementTerm');
    }

}

?>