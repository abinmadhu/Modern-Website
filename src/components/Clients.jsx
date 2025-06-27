import { companies } from "../constants"
import styles from "../style"

const Clients = () => {
  return (
    <div className={`flex items-center  flex-wrap rounded-lg ${styles.paddingY}`}> 
        {
        companies.map((company) => (
            <div key={company.name} className="flex flex-1 items-center space-x-4 p-4">
                <company.icon className="w-10 h-10 text-gray-700" />
                <span className="text-lg
                 font-semibold">{company.name}</span>
            </div>
        ))
        }
    </div>
  )
}

export default Clients