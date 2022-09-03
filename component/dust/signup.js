import Image from "next/image";
import Link from "next/link";
import { withRouter } from "next/router";
import React, { Component } from "react";
import { Form, Input, Button, Row, Col, notification } from "antd";
import Sideimage from "../component/misc/sideimage";
import {
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  EMAIL_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
} from "../component/common/constants";

const FormItem = Form.Item;

class Signup extends Component {
  state = {
    name: {
      value: "",
    },
    username: {
      value: "",
    },
    email: {
      value: "",
    },
    password: {
      value: "",
    },
  };

  handleSubmit = (e) => {
    console.log("submiii");
    e.preventDefault();

    const signupRequest = {
      name: this.state.name.value,
      email: this.state.email.value,
      username: this.state.username.value,
      password: this.state.password.value,
    };
    console.log(signupRequest);
    signup(signupRequest)
      .then((response) => {
        notification.success({
          message: "MyMoments",
          description:
            "Thank you! You're successfully registered. Please Login to continue!",
        });
        this.props.history.push("/login");
      })
      .catch((error) => {
        notification.error({
          message: "MyMoments",
          description:
            error.message || "Sorry! Something went wrong. Please try again!",
        });
      });
  };

  handleInputChange(event, validationFun) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    this.setState({
      [inputName]: {
        value: inputValue,
        ...validationFun(inputValue),
      },
    });
  }

  isFormInvalid() {
    return !(
      this.state.name.validateStatus === "success" &&
      this.state.username.validateStatus === "success" &&
      //   this.state.email.validateStatus === "success" &&
      this.state.password.validateStatus === "success"
    );
  }

  render() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2  p-10">
        <Sideimage />
        <div>
          <div className="max-w-sm  border mx-auto rounded overflow-hidden shadow-lg mt-auto m-8 lg:mx-20 lg:my-2 p-5 lg:p-8 flex justify-center">
            <div className=" mx-auto">
              <div className=" p-10 relative  h-10 mb-10 cursor-pointer">
                <Image
                  src="https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg"
                  layout="fill"
                />
              </div>
              <div className="p-10">
                <Form onSubmit={this.handleSubmit} className="">
                  <FormItem
                    className="rounded-l mt-5"
                    validateStatus={this.state.name.validateStatus}
                    help={this.state.name.errorMsg}
                    hasFeedback
                  >
                    <Input
                      name="name"
                      placeholder="Name"
                      value={this.state.name.value}
                      onChange={(event) =>
                        this.handleInputChange(event, this.validateName)
                      }
                    />
                  </FormItem>

                  <FormItem
                    className="rounded-l mt-5"
                    validateStatus={this.state.username.validateStatus}
                    help={this.state.username.errorMsg}
                    hasFeedback
                  >
                    <Input
                      name="username"
                      placeholder="Username"
                      value={this.state.username.value}
                      onChange={(event) =>
                        this.handleInputChange(event, this.validateUsername)
                      }
                    />
                  </FormItem>
                  <FormItem
                    className="rounded-l mt-5"
                    validateStatus={this.state.password.validateStatus}
                    help={this.state.password.errorMsg}
                    hasFeedback
                  >
                    <Input
                      size="large"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={this.state.password.value}
                      onChange={(event) =>
                        this.handleInputChange(event, this.validatePassword)
                      }
                    />
                  </FormItem>
                  <FormItem>
                    <Button
                      type="submit"
                      size="large"
                      className="bg-green-400 w-full h-10 rounded-full mt-10 shadow"
                      disabled={this.isFormInvalid()}
                      onClick={this.handleSubmit}
                    >
                      Signup
                    </Button>
                  </FormItem>
                </Form>
              </div>
            </div>
          </div>
          <div className="max-w-sm  border mx-auto rounded overflow-hidden shadow-lg mt-auto m-8 lg:mx-20 lg:my-4 p-5 lg:p-8 flex justify-center">
            <h2>
              Have an account? ?
              <Link href="/login">
                <a className="text-cyan-800 mx-2">Login</a>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    );
  }

  validateName = (name) => {
    if (!name) {
      return {
        validateStatus: "warning",
        errorMsg: `Please input your name`,
      };
    }
    if (name.length < NAME_MIN_LENGTH) {
      return {
        validateStatus: "error",
        errorMsg: `Name is too short (Minimum ${NAME_MIN_LENGTH} characters)`,
      };
    }

    if (name.length > NAME_MAX_LENGTH) {
      return {
        validationStatus: "error",
        errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters)`,
      };
    }

    return {
      validateStatus: "success",
      errorMsg: null,
    };
  };

  validateEmail = (email) => {
    if (!email) {
      return {
        validationStatus: "warning",
        errorMsg: "Please input your email",
      };
    }
    if (email.length > EMAIL_MAX_LENGTH) {
      return {
        validationStatus: "error",
        errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters)`,
      };
    }

    const EMAIL_REGEX = RegExp("[^@ ]+@[^@ ]+\\.[^@ ]+");
    if (!EMAIL_REGEX.test(email)) {
      return {
        validateStatus: "error",
        errorMsg: "Email not valid",
      };
    }

    return {
      validateStatus: "success",
      errorMsg: null,
    };
  };

  validateUsername = (username) => {
    if (!username) {
      return {
        validateStatus: "warning",
        errorMsg: "Please input a username",
      };
    }
    if (username.length < USERNAME_MIN_LENGTH) {
      return {
        validateStatus: "error",
        errorMsg: `Username is too short (Minimum ${USERNAME_MIN_LENGTH} characters)`,
      };
    }

    if (username.length > USERNAME_MAX_LENGTH) {
      return {
        validationStatus: "error",
        errorMsg: `Username is too long (Maximum ${USERNAME_MAX_LENGTH} characters)`,
      };
    }
    return {
      validateStatus: "success",
      errorMsg: null,
    };
  };

  validatePassword = (password) => {
    if (!password) {
      return {
        validateStatus: "warning",
        errorMsg: `Please input a poassword`,
      };
    }
    if (password.length < PASSWORD_MIN_LENGTH) {
      return {
        validateStatus: "error",
        errorMsg: `Password is too short (Minimum ${PASSWORD_MIN_LENGTH} characters needed.)`,
      };
    } else if (password.length > PASSWORD_MAX_LENGTH) {
      return {
        validationStatus: "error",
        errorMsg: `Password is too long (Maximum ${PASSWORD_MAX_LENGTH} characters allowed.)`,
      };
    } else {
      return {
        validateStatus: "success",
        errorMsg: null,
      };
    }
  };
}

export default withRouter(Signup);
