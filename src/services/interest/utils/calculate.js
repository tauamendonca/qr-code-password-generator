function calculateCompoundInterest(principal, annualRate, time, timeUnit, frequency) {
 
    // Converte a taxa anual para porcentagem 
    const rateDecimal = annualRate / 100;
    
    // Converte o período passado pelo usuário para anos
    let timeInYears = time;
    if (timeUnit === "2") {
        timeInYears = time / 12;
    }
    
    // Calcula o ganho por período e a quantidade total de períodos
    const ratePerPeriod = rateDecimal / frequency;
    const totalPeriods = timeInYears * frequency;
    
    // Calcula o montante final
    const finalAmount = principal * Math.pow(1 + ratePerPeriod, totalPeriods);
    
    // Calcula o retorno final 
    const interestEarned = finalAmount - principal;
    
    // Calcula o retorno percentual
    const percentageReturn = (interestEarned / principal) * 100;
    
    // Retorna os resultados
    return {
        finalAmount: finalAmount,
        interestEarned: interestEarned,
        percentageReturn: percentageReturn,
        totalPeriods: totalPeriods
    };
}
  
export default calculateCompoundInterest;