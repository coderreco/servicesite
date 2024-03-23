"use client"
import { AreaChart, Card } from '@tremor/react';

const data = [
  {
    "keyword": "home cleaning victoria bc",
    "Position": 50,
    "Previous": 54,
    "searchVolume": 140,
    "keywordDifficulty": 19
  },
  {
    "keyword": "cleaning victoria",
    "Position": 55,
    "Previous": 54,
    "searchVolume": 50,
    "keywordDifficulty": 20
  },
  {
    "keyword": "home cleaning services victoria bc",
    "Position": 55,
    "Previous": 65,
    "searchVolume": 210,
    "keywordDifficulty": 20
  },
  {
    "keyword": "house cleaning rates victoria bc",
    "Position": 57,
    "Previous": 0,
    "searchVolume": 40,
    "keywordDifficulty": 8
  },
  {
    "keyword": "victoria cleaning services",
    "Position": 60,
    "Previous": 0,
    "searchVolume": 260,
    "keywordDifficulty": 21
  },
  {
    "keyword": "cleaning company victoria",
    "Position": 62,
    "Previous": 92,
    "searchVolume": 50,
    "keywordDifficulty": 20
  },
  {
    "keyword": "cleaning services victoria bc",
    "Position": 73,
    "Previous": 0,
    "searchVolume": 390,
    "keywordDifficulty": 21
  },
  {
    "keyword": "cleaning companies victoria",
    "Position": 73,
    "Previous": 85,
    "searchVolume": 50,
    "keywordDifficulty": 19
  },
  {
    "keyword": "cleaning service victoria",
    "Position": 76,
    "Previous": 87,
    "searchVolume": 140,
    "keywordDifficulty": 19
  },
  {
    "keyword": "pure&clean",
    "Position": 80,
    "Previous": 0,
    "searchVolume": 50,
    "keywordDifficulty": 23
  },
  {
    "keyword": "victoria bc cleaning services",
    "Position": 81,
    "Previous": 0,
    "searchVolume": 40,
    "keywordDifficulty": 18
  },
  {
    "keyword": "cleaning services victoria",
    "Position": 84,
    "Previous": 90,
    "searchVolume": 210,
    "keywordDifficulty": 20
  },
  {
    "keyword": "home cleaning services victoria bc",
    "Position": 90,
    "Previous": 0,
    "searchVolume": 210,
    "keywordDifficulty": 20
  },
  {
    "keyword": "house cleaning rates victoria bc",
    "Position": 91,
    "Previous": 0,
    "searchVolume": 40,
    "keywordDifficulty": 8
  }
]

export default function AreaGraph() { 

  return (
    <Card>
    <AreaChart
      data={data}
      index="keyword"
      categories={["Position", "Previous"]}
      colors={["emerald-600", "rose-400"]}
      curveType='monotone'
      title="Keyword Position"
      className='h-96 w-full'
      showAnimation={true}
        animationDuration={1500}
        showXAxis={false}
      />
    </Card>
  )

}