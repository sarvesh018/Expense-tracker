

import { Typography, List, Divider, styled, Box } from '@mui/material';
import Transaction from './Transaction';

const Component = styled(Box)`
    & > h5 {
        margin-bottom: 10px;
    }
    background-color: #445A6F;
    align-items: centre;
    padding: 10px 15px;
    text-align: center;
    color: white;
    border-radius: 20px;
`;
 
const Transactions = ({ transactions, deleteTransaction }) => {
    
    return (
        <Component>
            <Typography variant="h5">Transaction History</Typography>
            <Divider style={{width: '100%'}} />
            <List>
                {
                    transactions.map(transaction => {
                        return <Transaction transaction={transaction} deleteTransaction={deleteTransaction} key={transaction.id} />
                    })
                }
            </List>
        </Component>
    )
}

export default Transactions;