import TableNative from "@/_ui/table/TableNative"
import { truncateAddress } from "@/helpers"
import { style } from "@/styles/StyledConstants"
import { Td, Th } from "@chakra-ui/react"
import { useRouter } from "next/router"

type Prop = {
    txnData: any
}

const TxnTable = ({txnData}: Prop) => {

    const router = useRouter()

    return (
        <div>
            {txnData && (
                <TableNative data={txnData} theadChildren={<>
                    <Th style={style.table.Th}>
                        Txn Hash
                    </Th>
                    <Th style={style.table.Th}>
                        TimeStamp
                    </Th>
                    <Th style={style.table.Th}>
                        Method Name
                    </Th>
                    <Th style={style.table.Th}>
                        From
                    </Th>
                    <Th style={style.table.Th}>
                        To
                    </Th>
                </>} tbodyChildren={(item: any) => {
                    return <>
                        <Td
                        cursor={style.table.cursor.pointer} 
                        onClick={() => {
                            router.push(`/search/transaction/${item.transaction.txn_hash}`)
                        }}
                            style={style.table.Td}

                        >{truncateAddress(item?.transaction?.txn_hash)}</Td>
                        <Td style={style.table.Td}>{item?.timestamp}</Td>
                        <Td style={style.table.Td}>{item?.transaction?.method_name}</Td>
                        <Td style={style.table.Td}>{truncateAddress(item?.transaction?.from)}</Td>
                        <Td style={style.table.Td}>{truncateAddress(item?.transaction?.to)}</Td>
                    </>
                }} />
            )}
        </div>
    )
}
export default TxnTable