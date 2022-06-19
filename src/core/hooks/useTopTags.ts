import { useCallback, useState } from "react";
import { Metric, MetricService } from "tato_ap-sdk";

export default function useTopTags () {
    const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([])

    const fetchTopTags = useCallback(async function fetchTopTags() {
        MetricService
            .getTop3Tags()
            .then(setTopTags) 
    }, [])

    return {
        topTags,
        fetchTopTags
    }
}