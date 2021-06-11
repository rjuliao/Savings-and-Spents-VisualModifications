import { api, LightningElement, wire } from 'lwc';
import NAME from '@salesforce/schema/Fortnight__c.Name';
import TOTAL_FIXED_COSTS from '@salesforce/schema/Fortnight__c.Total_fixed_costs__c';
import TOTAL_PURCHASES from '@salesforce/schema/Fortnight__c.Total_purchases__c';
import TOTAL_SPENT from '@salesforce/schema/Fortnight__c.Total_Spent__c';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import {NavigationMixin} from 'lightning/navigation';

const fields = [NAME, TOTAL_FIXED_COSTS, TOTAL_PURCHASES, TOTAL_SPENT]

export default class FortnightInformationCmp extends NavigationMixin(LightningElement) {
    @api recordId

    //Get the record information
    @wire(getRecord, {recordId : '$recordId', fields})
    fortnight

    editHandleBtm(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes : {
                recordId : this.recordId,
                objectApiName : 'Fortnight__c',
                actionName : 'edit',
            }
        })
    }

    backHandleBtm(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Fortnight__c',
                actionName : 'list',
                filterName : 'All'
            }
        })
    }

    deleteHandleBtm(){

    }

    //Get fields information
    get getColorValue(){
        return TOTAL_SPENT < 800000 ? 'value3' : TOTAL_SPENT >= 800000 && TOTAL_SPENT <1100000 ? 'value1' : 'value2';
    }

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