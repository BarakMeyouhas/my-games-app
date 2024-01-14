import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
@Component({
    selector: 'app-crypto-list',
    templateUrl: './crypto-list.component.html',
    styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent implements OnInit {
    cryptoData: any = "";
    constructor(private CryptoService: CryptoService) { }

    ngOnInit(): void {
        //simple demo of getting message each second
        // this.cryptoService.getTestData().subscribe((data: any) => {
        //     console.log(data);
        // });

        //get a data from api request
        this.CryptoService.makeApiRequest().subscribe(data => {
            console.log(data)
            this.cryptoData = data;
        });
    }

}