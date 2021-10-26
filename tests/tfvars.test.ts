import "jest";
import { readVersion, writeVersion } from "../src/tfvars";

test("readVersion", (): void => {
  let input: string = "";

  input = `deployment_name = "foo"
version="1.2.3"

availability_zone_names = [
  "eu-central-1a",
  "eu-central-1b"
]`;
  expect(readVersion(input)).toBe("1.2.3");

  input = `deployment_name = "foo"
version   =           "4.5.6-rc.1"

availability_zone_names = [
  "eu-central-1a",
  "eu-central-1b"
]`;
  expect(readVersion(input)).toBe("4.5.6-rc.1");

  input = `deployment_name = "foo"

availability_zone_names = [
  "eu-central-1a",
  "eu-central-1b"
]`;
  expect((): string => readVersion(input)).toThrow(new Error("VERSION is not present."));

  input = `deployment_name = "foo"
version = ""

availability_zone_names = [
  "eu-central-1a",
  "eu-central-1b"
]`;
  expect((): string => readVersion(input)).toThrow(new Error("VERSION is empty."));
});

test("writeVersion", (): void => {
  let input: string = "";
  let output: string = "";

  input = `deployment_name = "foo"
version="1.2.3"

availability_zone_names = [
  "eu-central-1a",
  "eu-central-1b"
]`;
  output = `deployment_name = "foo"
version = "1.2.4-rc.1"

availability_zone_names = [
  "eu-central-1a",
  "eu-central-1b"
]`;
  expect(writeVersion(input, "1.2.4-rc.1")).toBe(output);
});
