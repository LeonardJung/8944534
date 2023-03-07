import React from "react";
import "./Month.css";
import Cells from "./Cells";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Month() {
  return (
    <div className="topbar">
      <div className="columns">
        <div className="border">{"<<"}</div>
        <div className="border">{"<"}</div>
        <div className="col-span-3">August 2022</div>
        <div className="border">{">"}</div>
        <div className="border">{">>"}</div>

        {daysOfWeek.map((day) => (
          <Cells>{day}</Cells>
        ))}

        <Cells>1</Cells>
        <Cells>2</Cells>
        <Cells>3</Cells>
        <Cells>4</Cells>
        <Cells>5</Cells>
        <Cells>6</Cells>
        <Cells>7</Cells>
        <Cells>8</Cells>
        <Cells>9</Cells>
        <Cells>10</Cells>
        <Cells>11</Cells>
        <Cells>12</Cells>
        <Cells>13</Cells>
        <Cells>14</Cells>
        <Cells>15</Cells>
        <Cells>16</Cells>
        <Cells>17</Cells>
        <Cells>18</Cells>
        <Cells>19</Cells>
        <Cells>20</Cells>
        <Cells>21</Cells>
        <Cells>22</Cells>
        <Cells>23</Cells>
        <Cells>24</Cells>
        <Cells>25</Cells>
        <Cells>26</Cells>
        <Cells>27</Cells>
        <Cells>28</Cells>
        <Cells>29</Cells>
        <Cells>30</Cells>
        <Cells>31</Cells>
      </div>
    </div>
  );
}

export default Month;
