import React from "react";
import { useEffect, useState } from "react";
import {
  BaseHeaderLayout,
  Box,
  Breadcrumbs,
  Crumb,
} from "@strapi/design-system";
// @ts-ignore
import { Chart } from "chart.js/auto";
import TimeConverter from "../../../components/TimeConvert/convert";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faUsersViewfinder,
  faGlobe,
  faClock,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";

const HomeComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [labelchart, setLabel] = useState([]);
  const [valueChart, setValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/analytic");
        const result = await response.json();

        if (result.length > 0) {
          setData(result);
        } else {
          console.log("nodata");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let totalDurasi = 0;
  let totalTotalUser = 0;
  let totalActiveUser = 0;
  let totalScreenPage = 0;

  // Menggunakan reduce untuk menjumlahkan nilai-nilai dari setiap objek
  data[0]?.reportData.forEach((item) => {
    const { durasi, totaluser, activeuser, screenPage } = item.data;

    // Mengonversi string ke angka (jika diperlukan)
    const durasiValue = parseFloat(durasi);
    const totalUserValue = parseInt(totaluser);
    const activeUserValue = parseInt(activeuser);
    const screenPageValue = parseInt(screenPage);

    // Menambahkan nilai ke total
    totalDurasi += durasiValue || 0;
    totalTotalUser += totalUserValue || 0;
    totalActiveUser += activeUserValue || 0;
    totalScreenPage += screenPageValue || 0;
  });
  let realtimeuser = 0;
  data[0]?.realtimeData.forEach((item) => {
    const { activeuser } = item.data;
    const activeUserValue = parseInt(activeuser);

    realtimeuser += activeUserValue || 0;
  });

  console.log(realtimeuser);
  const konversiBulan = (bulanAngka) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Okt",
      "Nov",
      "Des",
    ];

    if (Array.isArray(bulanAngka)) {
      // Jika inputan adalah array bulan angka
      return bulanAngka.map((bulan) => {
        const bulanNumber = parseInt(bulan, 10); // Parse string ke angka
        if (bulanNumber >= 1 && bulanNumber <= 12) {
          return months[bulanNumber - 1];
        } else {
          return "Invalid Month Number";
        }
      });
    } else if (
      typeof bulanAngka === "string" ||
      typeof bulanAngka === "number"
    ) {
      // Jika inputan adalah string atau angka bulan tunggal
      // @ts-ignore
      const bulanNumber = parseInt(bulanAngka, 10); // Parse string ke angka
      if (bulanNumber >= 1 && bulanNumber <= 12) {
        return months[bulanNumber - 1];
      } else {
        return "Invalid Month Number";
      }
    } else {
      return "Invalid Input";
    }
  };
  const maping = data[0]?.reportData.map((item) => ({
    bulan: item.data.month.value,
    jumlah: item.data.totaluser,
  }));
  const jumlah = maping
    ? maping.reduce((acc, curr) => {
        const month = curr.bulan;
        const amount = parseInt(curr.jumlah);

        if (!acc[month]) {
          acc[month] = 0;
        }

        acc[month] += amount;

        return acc;
      }, [])
    : [];

  useEffect(() => {
    const labels = Object.keys(jumlah);
    const bulanjal = konversiBulan(labels);
    const values = Object.values(jumlah);
    const combinedArray = labels.map((label, index) => ({
      // @ts-ignore
      [bulanjal]: values[index],
    }));

    const bulanTotal = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Okt",
      "Nov",
      "Des",
    ];

    // Inisialisasi array default
    const defaultValue = Array(bulanTotal.length).fill(0);

    // Fungsi untuk menggabungkan data
    const combineData = (combinedArray, bulanTotal) => {
      const result = [...defaultValue];

      combinedArray.forEach((item) => {
        const bulan = Object.keys(item)[0];
        const nilai = item[bulan];
        const index = bulanTotal.indexOf(bulan);

        if (index !== -1) {
          result[index] = nilai;
        }
      });

      return result;
    };

    const hasilGabungan = combineData(combinedArray, bulanTotal);

    const ctx = document
      .getElementById("chartjs-dashboard-line")
      // @ts-ignore
      .getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 225);
    gradient.addColorStop(0, "rgb(255,99,132,1)");
    gradient.addColorStop(1, "rgb(255,99,132,0)");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: bulanTotal,
        datasets: [
          {
            label: "Jumlah Pengunjung",
            fill: false,
            backgroundColor: gradient,
            // @ts-ignore
            borderColor: "rgb(255,99,132)",
            data: hasilGabungan ? hasilGabungan : [],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        // @ts-ignore
        tension: 0.4,
        tooltips: {
          intersect: false,
        },
        hover: {
          intersect: true,
        },
        plugins: {
          filler: {
            propagate: false,
          },
          legend: {
            display: false,
          },
        },
        scales: {
          // @ts-ignore
          x: {
            grid: {
              drawOnChartArea: false,
            },
          },

          // @ts-ignore
          y: {
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [jumlah]);
  const kota = data[0]?.reportData.map((item) => ({
    data: item.data.city.value,
  }));
  const kotachart = kota?.map((item) => item.data);

  console.log(kota);
  const peng = data[0]?.reportData.map((item) => ({
    data: item.data.totaluser,
  }));
  const pengchart = peng?.map((item) => item.data);
  useEffect(() => {
    const ctx = document
      .getElementById("chartjs-dashboard-pie")
      // @ts-ignore
      .getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 225);
    gradient.addColorStop(0, "rgb(255,99,132,1)");
    gradient.addColorStop(1, "rgb(255,99,132,0)");

    const chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: kotachart ? kotachart : [],
        datasets: [
          {
            data: pengchart ? pengchart : [],
            backgroundColor: ["#36A2EB", "#FF6384", "#4BC0C0"],
            borderWidth: 5,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          // @ts-ignore
          legend: {
            display: false,
          },
        },
        // @ts-ignore
        cutoutPercentage: 75,
      },
    });

    return () => {
      chart.destroy();
    };
  }, [kotachart, pengchart]);

  const customStyle = {
    height: "150px",
    overflow: "auto",
  };
  const customStyle2 = {
    height: "20rem",
    overflow: "auto",
  };

  return (
    <Box background="neutral100">
      <BaseHeaderLayout
        title="Dashboard Pengunjung"
        subtitle={
          <Breadcrumbs label="folders">
            <Crumb>Plugins</Crumb>
            <Crumb>Dashboard Pengunjung</Crumb>
          </Breadcrumbs>
        }
        as="h2"
      />
      <div>
        <main className="container-fluid">
          <div className="px-5">
            <div className="row">
              <div className="col-xl-6 col-xxl-5 d-flex">
                <div className="w-100">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body my-1">
                          <div className="row">
                            <div className="col mt-0">
                              <h5 className="card-title">Total</h5>
                              <h5 className="card-title">Pengunjung</h5>
                            </div>

                            <div className="col-auto">
                              <FontAwesomeIcon
                                className="text-success fs-2"
                                icon={faUsersViewfinder}
                              />
                            </div>
                          </div>
                          {loading ? (
                            <div>
                              <h1 className="mt-1 mb-3 fs-1">0</h1>
                            </div>
                          ) : (
                            <div>
                              <h1 className="mt-1 mb-3 fs-1">
                                {totalTotalUser}
                              </h1>
                            </div>
                          )}
                          <div className="mb-0">
                            <span className="text-muted">
                              Total User Metrics
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body my-1">
                          <div className="row">
                            <div className="col mt-0">
                              <h5 className="card-title">Realtime</h5>
                              <h5 className="card-title">Pengunjung</h5>
                            </div>

                            <div className="col-auto">
                              <FontAwesomeIcon
                                className="text-primary fs-2"
                                icon={faGlobe}
                              />
                            </div>
                          </div>
                          {loading ? (
                            <div>
                              <h1 className="mt-1 mb-3 fs-1">0</h1>
                            </div>
                          ) : (
                            <div>
                              <h1 className="mt-1 mb-3 fs-1">{realtimeuser}</h1>
                            </div>
                          )}
                          <div className="mb-0">
                            <span className="text-muted">Dalam 30 Menit</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body my-1">
                          <div className="row">
                            <div className="col mt-0">
                              <h5 className="card-title">Waktu Sesi</h5>
                              <h5 className="card-title">Pengunjung</h5>
                            </div>

                            <div className="col-auto ">
                              <FontAwesomeIcon
                                className="text-warning fs-2"
                                icon={faClock}
                              />
                            </div>
                          </div>
                          {loading ? (
                            <div>
                              <h1 className="mt-1 mb-3 fs-1">
                                <TimeConverter seconds={0} />
                              </h1>
                            </div>
                          ) : (
                            <div>
                              <h1 className="mt-1 mb-3 fs-1">
                                <TimeConverter seconds={totalDurasi} />
                              </h1>
                            </div>
                          )}
                          <div className="mb-0">
                            <span className="text-muted">
                              Session Time Metrics
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body my-1">
                          <div className="row">
                            <div className="col mt-0">
                              <h5 className="card-title">Total</h5>
                              <h5 className="card-title">Kunjungan</h5>
                            </div>

                            <div className="col-auto">
                              <FontAwesomeIcon
                                className="text-danger fs-2"
                                icon={faSignal}
                              />
                            </div>
                          </div>
                          {loading ? (
                            <div>
                              <h1 className="mt-1 mb-3 fs-1">0 kali</h1>
                            </div>
                          ) : (
                            <div>
                              <h1 className="mt-1 mb-3 fs-1">
                                {totalScreenPage} kali
                              </h1>
                            </div>
                          )}
                          <div className="mb-0">
                            <span className="text-muted">
                              Visitor Pages Metrics
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-xxl-7 d-flex">
                <div className="card flex-fill w-100">
                  <div className="card-header">
                    <h5 className="card-title mb-0">
                      Jumlah Pengunjung Perbulan
                    </h5>
                  </div>
                  <div className="card-body py-3">
                    <div className="chart chart-sm">
                      <canvas id="chartjs-dashboard-line"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12 col-xxl-3 d-flex order-2 order-xxl-3">
                <div className="card flex-fill w-100">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Grafik Daerah</h5>
                  </div>
                  <div className="card-body d-flex">
                    <div className="align-self-center w-100">
                      <div className="py-3">
                        <div className="chart chart-xs">
                          <canvas id="chartjs-dashboard-pie"></canvas>
                        </div>
                      </div>
                      <div style={customStyle}>
                        <table className="table mb-0 ">
                          {loading ? (
                            <></>
                          ) : (
                            <tbody>
                              {data[0].reportData.map((item, index) => (
                                <tr key={index}>
                                  <td>{item.data.city.value}</td>
                                  <td className="text-center">
                                    {item.data.totaluser}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          )}
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-8 col-xxl-9 d-flex">
                <div className="card flex-fill w-100">
                  <div className="card-header">
                    <h5 className="card-title mb-0">
                      Tabel Pengunjung Website
                    </h5>
                  </div>
                  <div className="mx-2 " style={customStyle2}>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Kota</th>
                          <th className="text-center">Pengunjung</th>
                          <th className="text-center">Pengguna Aktif</th>
                          <th className="text-start">Kunjungan</th>
                          <th className="text-start">Waktu Interaksi</th>
                        </tr>
                      </thead>
                      {loading ? (
                        <></>
                      ) : (
                        <tbody>
                          {data[0].reportData.map((item, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item.data.city.value}</td>
                              <td className="text-center">
                                {item.data.totaluser}
                              </td>
                              <td className="text-center">
                                {item.data.activeuser}
                              </td>
                              <td className="">{item.data.screenPage} Kali</td>
                              <td className="">
                                <TimeConverter seconds={item.data.durasi} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      )}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Box>
  );
};

export default HomeComponent;
