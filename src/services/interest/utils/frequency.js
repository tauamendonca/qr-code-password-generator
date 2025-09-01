// (1) Annual (12 months)
// (2) Semiannual (6 months)
// (3) Quarterly (3 months)
// (4) Monthly (30 days)
// (5) Daily (365 days)

export function getFrequency(frequency) {
    switch (frequency) {
        case (frequency === '1'):
            return 1;
        case (frequency === '2'):
            return 2;
        case (frequency === '3'):
            return 4;
        case (frequency === '4'):
            return 12;
        case (frequency === '5'):
            return 365;
        default:
            return 12
    }
}