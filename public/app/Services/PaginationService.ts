import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService {

    getPageSetup(
            items:any[],
            currentPage:number = 1,
            pageSize:number = 5,
            maxNumberOfNumeralButtons:number = 5) {

        let totalItems = items.length;
        let totalPages = Math.ceil(totalItems/pageSize);
        let pageNumbers: Number[] = [];

        let startPage:number;
        let endPage:number;
        let percentile = Math.floor((maxNumberOfNumeralButtons-1)/2);

        if (totalPages<=maxNumberOfNumeralButtons) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if(currentPage<=percentile+1){
                startPage = 1;
                endPage = currentPage + percentile;
            } else if (currentPage>=totalPages-percentile){
                startPage = currentPage - percentile;
                endPage = totalPages;
            } else {
                startPage = currentPage - percentile;
                endPage = currentPage + percentile;
            }
        }

        //splicing the array into one page
        let startIndex = (currentPage-1) * pageSize;
        let endIndex = Math.min(totalItems, startIndex + pageSize);
        let singlePageOfItems = items.slice(startIndex,endIndex);

        for(let i=startPage;i<=endPage;i++){
            pageNumbers.push(i);
        }

        return {
            totalItems:totalItems,
            totalPages:totalPages,
            startPage:startPage,
            currentPage:currentPage,
            endPage:endPage,
            singlePageOfItems:singlePageOfItems,
            pageNumbers:pageNumbers
        };
    }

}
