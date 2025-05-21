export function percentBarAge(value) {
    let valeInt = parseInt(value)
    const percentage = (valeInt / 5) * 100
    return percentage
  }

  export function numberWithCommas(x) {
    return (x ?? 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}