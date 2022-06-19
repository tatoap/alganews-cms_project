import { useEffect } from "react"
import Chart from "../components/Chart/Chart"
import withBoundary from "../../core/hoc/withBoundary"
import Skeleton from "react-loading-skeleton"
import usePerformance from "../../core/hooks/usePerformance"

function UserPerformance () {
  const { performance, fetchPerformance } = usePerformance()

  useEffect(() => {
    fetchPerformance()
  }, [fetchPerformance])

  if (!performance) 
    return <div>
      <Skeleton height={227} />
    </div>

  return <Chart
    title="Média de performance nos últimos 12 meses"
    data={performance}
  />
}

export default withBoundary(UserPerformance, 'performance')