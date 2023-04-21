import * as echarts from "echarts/core";
import React, { useEffect, useState } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import { Bar3DChart, Scatter3DChart, ScatterGLChart } from "echarts-gl/charts";
import { CanvasRenderer } from "echarts/renderers";
import { Grid3DComponent } from "echarts-gl/components";
import {
  LineChart,
  PieChart,
  ScatterChart,
  BarChart,
  RadarChart,
  MapChart,
  TreeChart,
  TreemapChart,
  GraphChart,
  GaugeChart,
  FunnelChart,
  ParallelChart,
  SankeyChart,
  BoxplotChart,
  CandlestickChart,
  EffectScatterChart,
  LinesChart,
  HeatmapChart,
  PictorialBarChart,
  ThemeRiverChart,
  SunburstChart,
  CustomChart,
} from "echarts/charts";
import {
  GridSimpleComponent,
  GridComponent,
  PolarComponent,
  RadarComponent,
  GeoComponent,
  SingleAxisComponent,
  ParallelComponent,
  CalendarComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  AxisPointerComponent,
  BrushComponent,
  TitleComponent,
  TimelineComponent,
  MarkPointComponent,
  MarkLineComponent,
  MarkAreaComponent,
  LegendComponent,
  LegendScrollComponent,
  LegendPlainComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
  AriaComponent,
  TransformComponent,
  DatasetComponent,
} from "echarts/components";

echarts.use([
  LineChart,
  Scatter3DChart,
  Bar3DChart,
  ScatterGLChart,
  Grid3DComponent,
  PieChart,
  BarChart,
  ScatterChart,
  RadarChart,
  MapChart,
  TreeChart,
  TreemapChart,
  GraphChart,
  GaugeChart,
  FunnelChart,
  ParallelChart,
  SankeyChart,
  BoxplotChart,
  CandlestickChart,
  EffectScatterChart,
  LinesChart,
  HeatmapChart,
  PictorialBarChart,
  ThemeRiverChart,
  SunburstChart,
  CustomChart,
  GridSimpleComponent,
  GridComponent,
  PolarComponent,
  RadarComponent,
  GeoComponent,
  SingleAxisComponent,
  ParallelComponent,
  CalendarComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  AxisPointerComponent,
  BrushComponent,
  TitleComponent,
  TimelineComponent,
  MarkPointComponent,
  MarkLineComponent,
  MarkAreaComponent,
  LegendComponent,
  LegendScrollComponent,
  LegendPlainComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
  AriaComponent,
  TransformComponent,
  DatasetComponent,
  CanvasRenderer,
]);

export const Chart = (props: any) => {
  const [style] = useState(props.sx ?? { height: "250px", width: "250px" });
  const [data] = useState(props.data);
  return (
    <ReactEChartsCore
      option={data}
      echarts={echarts}
      notMerge={true}
      lazyUpdate={true}
      onChartReady={() => {
        console.log("ready");
      }}
      style={style}
    />
  );
};

const newDiv = document.createElement("div");
newDiv.style.width = "300px";
newDiv.style.height = "300px";
const myChart = echarts.init(newDiv);

export const createChartImage = (text: string, options: any) => {
  myChart.setOption(options);
  myChart.resize();
  return myChart.renderToCanvas().toDataURL();
};
