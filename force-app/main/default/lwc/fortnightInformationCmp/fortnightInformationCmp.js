import { api, LightningElement, wire } from 'lwc';
import NAME from '@salesforce/schema/Fortnight__c.Name';
import TOTAL_FIXED_COSTS from '@salesforce/schema/Fortnight__c.Total_fixed_costs__c';
import TOTAL_PURCHASES from '@salesforce/schema/Fortnight__c.Total_purchases__c';
import TOTAL_SPENT from '@salesforce/schema/Fortnight__c.Total_Spent__c';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';

const fields = [NAME, TOTAL_FIXED_COSTS, TOTAL_PURCHASES, TOTAL_SPENT]

export default class FortnightInformationCmp extends LightningElement {
    @api recordId

    //Get the record information
    @wire(getRecord, {recordId : '$recordId', fields})
    fortnight

    editHandleBtm(){

    }

    backHandleBtm(){

    }

    deleteHandleBtm(){
        
    }

    //Get fields information

    get nameValue(){
        return getFieldValue(this.fortnight.data, NAME)
    }

    get totalFixedCost(){
        return getFieldValue(this.fortnight.data, TOTAL_FIXED_COSTS)
    }

    get totalPurchases(){
        return getFieldValue(this.fortnight.data, TOTAL_PURCHASES)
    }

    get totalSpents(){
        return getFieldValue(this.fortnight.data, TOTAL_SPENT)
    }
}