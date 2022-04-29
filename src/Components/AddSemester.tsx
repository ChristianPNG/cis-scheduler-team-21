import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ShowFallSemester } from "./ShowFallSemester";
import { ShowSpringSemester } from "./ShowSpringSemester";
import { ShowWinterSession } from "./ShowWinterSession";
import { ShowSummerSession } from "./ShowSummerSession";
import "../App.css";

export function AddSemester(): JSX.Element {
    const [FallElement, setFallElement] = useState<JSX.Element | null>(null);
    const [SpringElement, setSpringElement] = useState<JSX.Element | null>(
        null
    );
    const [SummerElement, setSummerElement] = useState<JSX.Element | null>(
        null
    );
    const [WinterElement, setWinterElement] = useState<JSX.Element | null>(
        null
    );
    const [Visible, setVisible] = useState<boolean>(false);
    const [SearchVisible, setSearchVisible] = useState<boolean>(false);
    function setVisEdit(): void {
        setVisible(!Visible);
        if (FallElement !== null) {
            addFall(!Visible, SearchVisible);
        }
        if (SpringElement !== null) {
            addSpring(!Visible, SearchVisible);
        }
        if (WinterElement !== null) {
            addWinter(!Visible, SearchVisible);
        }
        if (SummerElement !== null) {
            addSummer(!Visible, SearchVisible);
        }
    }
    function setVisSearch(): void {
        setSearchVisible(!SearchVisible);
        if (FallElement !== null) {
            addFall(Visible, !SearchVisible);
        }
        if (SpringElement !== null) {
            addSpring(Visible, !SearchVisible);
        }
        if (WinterElement !== null) {
            addWinter(Visible, !SearchVisible);
        }
        if (SummerElement !== null) {
            addSummer(Visible, !SearchVisible);
        }
    }
    function addFall(visibleState: boolean, visibleSearchState: boolean): void {
        setFallElement(
            <ShowFallSemester
                setFall={setFallElement}
                Visible={visibleState}
                SearchVisible={visibleSearchState}
            ></ShowFallSemester>
        );
    }
    function addSpring(
        visibleState: boolean,
        visibleSearchState: boolean
    ): void {
        setSpringElement(
            <ShowSpringSemester
                setSpring={setSpringElement}
                Visible={visibleState}
                SearchVisible={visibleSearchState}
            ></ShowSpringSemester>
        );
    }
    function addSummer(
        visibleState: boolean,
        visibleSearchState: boolean
    ): void {
        setSummerElement(
            <ShowSummerSession
                setSummer={setSummerElement}
                Visible={visibleState}
                SearchVisible={visibleSearchState}
            ></ShowSummerSession>
        );
    }
    function addWinter(
        visibleState: boolean,
        visibleSearchState: boolean
    ): void {
        setWinterElement(
            <ShowWinterSession
                setWinter={setWinterElement}
                Visible={visibleState}
                SearchVisible={visibleSearchState}
            ></ShowWinterSession>
        );
    }
    return (
        <div>
            <div
                style={{
                    textAlign: "center"
                }}
            >
                <Button
                    className="customButton"
                    onClick={() => addFall(Visible, SearchVisible)}
                >
                    Add Fall Semester
                </Button>
                <Button
                    className="customButton"
                    onClick={() => addWinter(Visible, SearchVisible)}
                >
                    Add Winter Session
                </Button>
                <Button
                    className="customButton"
                    onClick={() => addSpring(Visible, SearchVisible)}
                >
                    Add Spring Semester
                </Button>
                <Button
                    className="customButton"
                    onClick={() => addSummer(Visible, SearchVisible)}
                >
                    Add Summer Session
                </Button>
            </div>
            <div
                style={{ float: "right", marginRight: "3ch", marginTop: "2ch" }}
            >
                <Button onClick={setVisEdit}>Edit Mode</Button>
                <Button onClick={setVisSearch} style={{ marginLeft: ".5ch" }}>
                    Search Mode
                </Button>
            </div>
            <div>
                <Row style={{ width: "100%" }}>
                    <Col style={{ marginLeft: "1ch" }}>
                        <br></br>
                        {FallElement}
                    </Col>
                    <Col>
                        <br></br>
                        {SpringElement}
                    </Col>
                </Row>
                <Row style={{ width: "100%" }}>
                    <Col style={{ marginLeft: "1ch" }}>
                        <br></br>
                        {WinterElement}
                    </Col>
                    <Col>
                        <br></br>
                        {SummerElement}
                    </Col>
                </Row>
            </div>
        </div>
    );
}
