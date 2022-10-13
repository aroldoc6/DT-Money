/* eslint-disable prettier/prettier */
import { SummaryCart, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { priceFomatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary(){
   const summary = useSummary();

    return(
        <SummaryContainer>
            <SummaryCart>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>{priceFomatter.format(summary.income)}</strong>
            </SummaryCart>
            <SummaryCart>
                <header>
                    <span>Saída</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                <strong>{priceFomatter.format(summary.outcome)}</strong>
            </SummaryCart>
            <SummaryCart variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#FFF"/>
                </header>
                <strong>{priceFomatter.format(summary.total)}</strong>
            </SummaryCart>
        </SummaryContainer>
    )
}