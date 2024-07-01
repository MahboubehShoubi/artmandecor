"use client";

import React from "react";
import Image from "next/image";
import style from "@/template/ProjectsPage.module.css";
import VideoPlayer from "@/module/VideoPlayer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Stack } from "react-bootstrap";

import "animate.css";

function ProjectsPage() {
  return (
    <div className={style.worksContainer}>
      <Container className={style.container}>
        <Row className="justify-content-md-center">
          <Col xs lg="12">
            <Tabs
              defaultActiveKey="kitchen"
              id="fill-tab"
              className={style.listTab}
              // justify
              fill
            >
              {/* --------------------------- KITCHEN ------------------------------ */}
              <Tab eventKey="kitchen" title="KITCHEN">
                <div className={style.worksBoxImage}>
                  <Row className="d-flex justify-content-md-center p-0 mb-4">
                    <Row className="d-flex justify-content-between m-0 p-0 row-gap-4">
                      <Col xs={12} md={4} lg={4}>
                        <div className="d-block d-sm-none animate__animated animate__zoomIn d-flex justify-content-center">
                          <VideoPlayer
                            src="/video/film-kitchen.mp4"
                            height={625}
                            width={400}
                          />
                        </div>
                        <div className="d-none d-sm-block">
                          <VideoPlayer
                            src="/video/film-kitchen.mp4"
                            height={625}
                          />
                        </div>
                      </Col>
                      <Col xs={12} md={8} lg={8}>
                        <Row className="d-flex justify-content-md-center m-0 p-0 row-gap-4">
                          <Row className="d-flex justify-content-between p-0 m-0">
                            <Col xs={12} md={12} lg={12}>
                              <Image
                                src="/images/kitchen/kitchen.jpg"
                                alt="Kitchen image"
                                width={2500}
                                height={1080}
                                className="w-100 animate__animated animate__zoomIn"
                              />
                            </Col>
                          </Row>
                          <Row className="d-flex p-0 m-0 row-gap-4">
                            <Col xs={12} md={6} lg={6}>
                              <Image
                                src="/images/kitchen/kitchen-12.jpg"
                                alt="Kitchen image"
                                width={2500}
                                height={1080}
                                className="w-100 animate__animated animate__zoomIn"
                              />
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                              <Image
                                src="/images/kitchen/kitchen-19.jpg"
                                alt="Kitchen image"
                                width={2500}
                                height={1080}
                                className="w-100 animate__animated animate__zoomIn"
                              />
                            </Col>
                          </Row>
                        </Row>
                      </Col>
                    </Row>
                  </Row>
                  <Row className="d-flex justify-content-between row-gap-4 mb-4">
                    <Col xs={12} md={8} lg={8}>
                      <Image
                        src="/images/kitchen/kitchen-26.jpg"
                        alt="Kitchen image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/kitchen/kitchen-1.png"
                        alt="Kitchen image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-between row-gap-4 mb-4">
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/kitchen/kitchen-31.jpg"
                        alt="Kitchen image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                      <Image
                        src="/images/kitchen/kitchen-16.jpg"
                        alt="Kitchen image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-between mb-4">
                    <Col xs={12} md={12} lg={12}>
                      <Image
                        src="/images/kitchen/kitchen-7.jpg"
                        alt="Kitchen image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-between row-gap-4 mb-4">
                    <Col xs={12} md={8} lg={8}>
                      <Image
                        src="/images/kitchen/kitchen-22.jpg"
                        alt="Kitchen image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/kitchen/kitchen-29.jpg"
                        alt="Kitchen image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-between row-gap-4 mb-4">
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/kitchen/kitchen-9.jpg"
                        alt="Kitchen image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                      <Image
                        src="/images/kitchen/kitchen-2.jpg"
                        alt="Kitchen image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-between mb-4">
                    <Col xs={12} md={12} lg={12}>
                      <Image
                        src="/images/kitchen/kitchen-17.jpg"
                        alt="Kitchen image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>
                </div>
              </Tab>

              {/* --------------------------------- DESK --------------------------------- */}
              <Tab eventKey="desk" title="DESK">
                <div className={style.worksBoxImage}>
                  <Row className="d-flex justify-content-between mb-4 row-gap-4">
                    <Col xs={12} md={8} lg={8}>
                      <Image
                        src="/images/desk/desk-2.jpg"
                        alt="Desk image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn object-fit-cover"
                      />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/desk/desk-3.jpg"
                        alt="Desk image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-between mb-4 row-gap-4">
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/desk/desk-5.jpg"
                        alt="Desk image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn object-fit-cover"
                      />
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                      <Image
                        src="/images/desk/desk-1.jpg"
                        alt="Desk image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-between mb-4">
                    <Col xs={12} md={12} lg={12}>
                      <Image
                        src="/images/desk/desk-4.jpg"
                        alt="Desk image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn h-100"
                      />
                    </Col>
                  </Row>
                </div>
              </Tab>

              {/* -------------------------- TV STAND --------------------------------------- */}
              <Tab eventKey="tvStand" title="TV STAND">
                <div className={style.worksBoxImage}>
                  <Row className="d-flex justify-content-between mb-4 row-gap-4">
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/tv-stand/TV-Stand-2.jpg"
                        alt="tv Stand image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                      <Image
                        src="/images/tv-stand/TV-Stand-1.jpg"
                        alt="tv Stand image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-between mb-4 row-gap-4">
                    <Col xs={12} md={8} lg={8}>
                      <Image
                        src="/images/tv-stand/TV-Stand-3.jpg"
                        alt="tv Stand image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/tv-stand/TV-Stand-4.jpg"
                        alt="tv Stand image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>
                </div>
              </Tab>

              {/* ------------------------------ CLOSET ---------------------------------------- */}
              <Tab eventKey="theCloset" title="CLOSET">
                <div className={style.worksBoxImage}>
                  <Row className="d-flex justify-content-between mb-4">
                    <Col xs={12} md={12} lg={12}>
                      <Image
                        src="/images/closet/Wall-closet-1.jpg"
                        alt="Closet image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>

                  <Row className="d-flex justify-content-between mb-4 row-gap-4">
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/closet/Wall-closet-4.jpg"
                        alt="Closet image"
                        width={2500}
                        height={1080}
                        className="w-100 h-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                      <div className={style.closetSection}>
                        <div>
                          <Image
                            src="/images/closet/Wall-closet-8.jpg"
                            alt="Closet image"
                            width={2500}
                            height={1080}
                            className="w-100 h-100 animate__animated animate__zoomIn"
                          />
                        </div>
                        <div>
                          <Image
                            src="/images/closet/Wall-closet-6.jpg"
                            alt="Closet image"
                            width={2500}
                            height={1080}
                            className="w-100 h-100 animate__animated animate__zoomIn"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/closet/Wall-closet-5.jpg"
                        alt="Closet image"
                        width={2500}
                        height={1080}
                        className="w-100 h-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>

                  <Row className="d-flex justify-content-between mb-4 row-gap-4">
                    <Col xs={12} md={4} lg={4}>
                      <div className={style.closetSection}>
                        <div>
                          <Image
                            src="/images/closet/Wall-closet-10.jpg"
                            alt="Closet image"
                            width={2500}
                            height={1080}
                            className="w-100 h-100 animate__animated animate__zoomIn"
                          />
                        </div>
                        <div>
                          <Image
                            src="/images/closet/Wall-closet-2.jpg"
                            alt="Closet image"
                            width={2500}
                            height={1080}
                            className="w-100 h-100 animate__animated animate__zoomIn"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/closet/Wall-closet-7.jpg"
                        alt="Closet image"
                        width={2500}
                        height={1080}
                        className="w-100 h-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                      <div className={style.closetSection}>
                        <div>
                          <Image
                            src="/images/closet/Wall-closet-9.jpg"
                            alt="Closet image"
                            width={2500}
                            height={1080}
                            className="w-100 h-100 animate__animated animate__zoomIn"
                          />
                        </div>
                        <div>
                          <Image
                            src="/images/closet/Wall-closet-3.jpg"
                            alt="Closet image"
                            width={2500}
                            height={1080}
                            className="w-100 h-100 animate__animated animate__zoomIn"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Tab>

              {/* -------------------------- SHOW CASE ---------------------------------------  */}
              <Tab eventKey="showcase" title="SHOW CASE">
                <div className={style.worksBoxImage}>
                  <Row className="d-flex justify-content-between mb-4 row-gap-4">
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/showcase/showcase-3.jpg"
                        alt="Closet image"
                        width={2500}
                        height={1080}
                        className="w-100 h-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/showcase/showcase-4.jpg"
                        alt="Closet image"
                        width={2500}
                        height={1080}
                        className="w-100 h-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/showcase/showcase-8.jpg"
                        alt="Closet image"
                        width={2500}
                        height={1080}
                        className="w-100 h-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-between mb-4">
                    <Col xs={12} md={12} lg={12}>
                      <Image
                        src="/images/showcase/showcase-1.jpg"
                        alt="Closet image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-between mb-4 row-gap-4">
                    <Col xs={12} md={8} lg={8}>
                      <Image
                        src="/images/showcase/showcase-6.jpg"
                        alt="Closet image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/showcase/showcase-2.jpg"
                        alt="Closet image"
                        width={2500}
                        height={1080}
                        className="w-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>
                </div>
              </Tab>

              {/* --------------------------- OTHER -------------------- */}
              <Tab eventKey="other" title="OTHER">
                <div className={style.worksBoxImage}>
                  <Row className="mb-4">
                    <Col xs={12} md={12} lg={12}>
                      <Image
                        src="/images/other/other-2.jpg"
                        alt="Closet image"
                        width={2500}
                        height={1080}
                        className="w-100 h-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>

                  <Row className="d-flex justify-content-between mb-4 row-gap-4">
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/other/other-3.jpg"
                        alt="Closet image"
                        width={2500}
                        height={1080}
                        className="w-100 h-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/other/other-8.jpg"
                        alt="Closet image"
                        width={2500}
                        height={1080}
                        className="w-100 h-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/other/other-9.jpg"
                        alt="Closet image"
                        width={2500}
                        height={1080}
                        className="w-100 h-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                  </Row>

                  <Row className="d-flex justify-content-between mb-4 row-gap-4">
                    <Col xs={12} md={4} lg={4}>
                      <Image
                        src="/images/other/other-7.jpg"
                        alt="Closet image"
                        width={2500}
                        height={1080}
                        className="w-100 h-100 animate__animated animate__zoomIn"
                      />
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                      <Row className="d-flex justify-content-md-center p-0  row-gap-4">
                        <Row className="d-flex justify-content-between m-0 p-0">
                          <Col xs={12} md={12} lg={12}>
                            <Image
                              src="/images/other/other-5.jpg"
                              alt="Closet image"
                              width={2500}
                              height={1080}
                              className="w-100 animate__animated animate__zoomIn"
                            />
                          </Col>
                        </Row>
                        <Row className="d-flex p-0 m-0 row-gap-4">
                          <Col xs={12} md={6} lg={6}>
                            <Image
                              src="/images/other/other-1.jpg"
                              alt="Closet image"
                              width={2500}
                              height={1080}
                              className="w-100 animate__animated animate__zoomIn"
                            />
                          </Col>
                          <Col xs={12} md={6} lg={6}>
                            <Image
                              src="/images/other/other-6.jpg"
                              alt="Closet image"
                              width={2500}
                              height={1080}
                              className="w-100 animate__animated animate__zoomIn"
                            />
                          </Col>
                        </Row>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectsPage;
