/* eslint-disable prettier/prettier */

import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFomatter, priceFomatter } from "../../utils/formatter";
import { SeachForm } from "./components/SearchForm";

import {PriceHighlight, TransactionsContainer, TransactionsTable} from './styles';



export function Transactions(){
    const  transactions  =  useContextSelector(TransactionsContext, (context) =>{
        return context.transactions;
    })

    return(
        <div>
            <Header/>
            <Summary />

            <TransactionsContainer>
                <SeachForm/>
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction =>{
                            return(
                            <tr key={transaction.id}>
                                <td width="50%">{transaction.descriptions}</td>
                                <td>
                                    <PriceHighlight variant={transaction.type}>
                                        {transaction.type === 'outcome' &&  '- '}
                                        {priceFomatter.format(transaction.price)}
                                    </PriceHighlight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{dateFomatter.format(new Date(transaction.createdAt))}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
       </div>
    )
}